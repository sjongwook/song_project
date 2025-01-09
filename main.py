from fastapi import FastAPI, Form, Request
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from fastapi.responses import RedirectResponse
from fastapi.responses import HTMLResponse

app = FastAPI()

# Static 파일 설정
app.mount("/static", StaticFiles(directory="static"), name="static")

# 템플릿 디렉토리 설정
templates = Jinja2Templates(directory="templates")

# 간단한 메모리 기반 사용자 저장소
users_db = {"admin": "password"}

# 메인 페이지
@app.get("/")
def main_page(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

# 로그인 페이지
@app.get("/login")
def login_page(request: Request):
    return templates.TemplateResponse("login.html", {"request": request})

# 회원가입 페이지
@app.get("/signup")
def signup_page(request: Request):
    return templates.TemplateResponse("signup.html", {"request": request})

# 회원가입 처리
@app.post("/signup")
def signup(username: str = Form(...), password: str = Form(...), confirm_password: str = Form(...)):
    if username in users_db:
        return {"error": "이미 존재하는 아이디입니다."}
    if password != confirm_password:
        return {"error": "비밀번호가 일치하지 않습니다."}
    
    # 사용자 저장
    users_db[username] = password
    
    # 회원가입 성공 후 메인 페이지로 리다이렉트
    return RedirectResponse(url="/", status_code=302)

# 로그인 처리
@app.post("/login")
def login(username: str = Form(...), password: str = Form(...)):
    if username not in users_db:
        return {"error": "존재하지 않는 아이디입니다."}
    if users_db[username] != password:
        return {"error": "비밀번호가 틀렸습니다."}
    
    return RedirectResponse(url="/welcome", status_code=302)

# 환영 페이지
@app.get("/welcome")
def welcome_page(request: Request):
    return templates.TemplateResponse("welcome.html", {"request": request, "username": "admin"})

# 비밀번호 찾기 페이지
@app.get("/forgot-password")
def forgot_password_page(request: Request):
    return templates.TemplateResponse("forgot_password.html", {"request": request})

# 비밀번호 재설정 처리
@app.post("/reset-password")
def reset_password(username: str = Form(...), new_password: str = Form(...)):
    if username not in users_db:
        return {"error": "존재하지 않는 아이디입니다."}
    
    # 비밀번호 업데이트
    users_db[username] = new_password
    return {"message": "비밀번호가 성공적으로 변경되었습니다."}

# templates 디렉토리를 설정합니다.
templates = Jinja2Templates(directory="templates")

@app.get("/", response_class=HTMLResponse)
async def read_root(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

@app.get("/home", response_class=HTMLResponse)
async def read_home(request: Request):
    return templates.TemplateResponse("home.html", {"request": request})

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)

# 보관함 페이지 라우트
@app.get("/box")
def read_box(request: Request):
    return templates.TemplateResponse("box.html", {"request": request})

# main_home_pli 페이지 라우트 추가
@app.get("/main_home_pli", response_class=HTMLResponse)
async def read_main_home_pli(request: Request):
    return templates.TemplateResponse("main_home_pli.html", {"request": request})
