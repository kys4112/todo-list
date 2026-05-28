# 📝 할 일 목록 (ToDo List)

## 주요 기능

- 할 일 추가 (버튼 클릭 / Enter 키)
- 완료 처리 (완료 버튼 → 취소선 표시)
- 수정 (수정 버튼 → prompt 창)
- 삭제 (삭제 버튼 → confirm 창)
- 새로고침해도 데이터 유지 (localStorage)
- 완료 처리된 일만 삭제
---

## 적용된 핵심 기술

- **DOM Manipulation** : `document.querySelector()`, `.innerHTML`, `.value`
- **Event Handling** : `onclick`, `onkeydown`
- **LocalStorage** : `localStorage.setItem()`, `localStorage.getItem()`
- **JSON Object** : `JSON.stringify()`, `JSON.parse()`
- **classList** : `done` 클래스로 완료 스타일 적용

---

## 전체 흐름 요약

- 할일추가 => 배열에 넣고 => 저장 => 화면출력
- 완료/수정/삭제 => 배열 수정 => 저장 => 화면 새로 출력
