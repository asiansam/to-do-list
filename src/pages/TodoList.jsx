import Form from "../components/form/Form";
import List from "../components/list/List";
import Todo from "../components/todo/Todo";

//github 데스크탑으로 옮김

function TodoList() {
  return <Box></Box>;
}

function Box() {
  return (
    <div>
      <Form></Form>
      <div className="working">working..🔥</div>
      <List></List>
      <div className="working">Done...!🎉</div>
      <Todo></Todo>
    </div>
  );
}

export default TodoList;
