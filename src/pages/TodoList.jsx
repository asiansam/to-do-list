import Form from "../components/form/Form";
import List from "../components/list/List";

//github 데스크탑으로 옮김

function TodoList() {
  return (
    <div>
      <Form></Form>
      <div className="working">working..🔥</div>
      <List isDone={true}></List>
      <div className="working">Done...!🎉</div>
      <List isDone={false}></List>
    </div>
  );
}

export default TodoList;
