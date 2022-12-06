import CustomCard from "../components/list/list";
import CustomCardtwo from "../components/todo/todo";
import Form from "../components/form/form";
import "../components/form/form.css";

//github 데스크탑으로 옮김

function TodoList() {
  return <Box></Box>;
}

function Box() {
  return (
    <div>
      <Form></Form>
      <div className="working">working..🔥</div>
      <CustomCard></CustomCard>
      <div className="working">Done...!🎉</div>
      <CustomCardtwo></CustomCardtwo>
    </div>
  );
}

export default TodoList;
