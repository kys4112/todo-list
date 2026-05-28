//localStorage에서 기존 데이터 불러오기 (JSON.parse)
let todos = JSON.parse(localStorage.getItem("todos")) || [];

// 페이지가 열릴 때 목록을 화면에 표시
renderList();


//추가 버튼 클릭 시 실행되는 함수
function addTodo() {

  // document.querySelector()로 입력창의 .value 가져오기(Manipulation)
  const input = document.querySelector("#todo-input");
  const text = input.value;

  //아무것도 안쓰면 경고
  if (text === "") {
    alert("할 일을 입력해주세요!");
    return;
  }

  // 새 할 일 객체 만들기
  const newTodo = {
    id: Date.now(),
    text: text,
    done: false
  };

  todos.push(newTodo);

  // localStorage에 저장 (JSON.stringify)
  localStorage.setItem("todos", JSON.stringify(todos));

  input.value = ""; // 입력창 비우기
  renderList();     // 화면 새로 출력
}


//Enter 키 입력 시 추가 (onkeydown 이벤트)
function handleKeyDown(event) {
  if (event.key === "Enter") {
    addTodo();
  }
}


//완료 처리
function toggleDone(id) {
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id === id) {
      // classList 개념 — done 상태를 반전
      todos[i].done = !todos[i].done;
    }
  }
  localStorage.setItem("todos", JSON.stringify(todos));
  renderList();
}


//수정
function editTodo(id) {
  const newText = prompt("수정할 내용을 입력하세요:");

  if (newText === null || newText === "") return;

  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id === id) {
      todos[i].text = newText;
    }
  }
  localStorage.setItem("todos", JSON.stringify(todos));
  renderList();
}


//삭제
function deleteTodo(id) {
  const result = confirm("정말 삭제할까요?");
  if (!result) return;

  todos = todos.filter(function(todo) {
    return todo.id !== id;  
  });

  localStorage.setItem("todos", JSON.stringify(todos));
  renderList();
}

// 완료된 항목 전체 삭제
function clearDone() {
  todos = todos.filter(function(todo) {
    return todo.done === false;  
  });
  localStorage.setItem("todos", JSON.stringify(todos));
  renderList();
}

// ⑦ 화면에 목록 출력 (DOM 렌더링)
// HTML 문자열을 만들어서 .innerHTML로 출력
function renderList() {
  let html = "";

  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];
    const doneClass = todo.done ? "done" : "";

    html += "<li class='" + doneClass + "'>";
    html += "  <span>" + todo.text + "</span>";
    html += "  <button class='btn-done'   onclick='toggleDone(" + todo.id + ")'>완료</button>";
    html += "  <button class='btn-edit'   onclick='editTodo("   + todo.id + ")'>수정</button>";
    html += "  <button class='btn-delete' onclick='deleteTodo(" + todo.id + ")'>삭제</button>";
    html += "</li>";
  }

  // document.querySelector()와 .innerHTML로 화면 업데이트(Manipulation)
  document.querySelector("#todo-list").innerHTML = html;
}