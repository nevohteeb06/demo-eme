import KanbanBoard from "../molecules/KanbanBoard"

const KanbanPage = () => {
  // if admin show all the departments
  // else only show the list of particular department
  return (
    <>
      <KanbanBoard
        department={"Sales department"}
       />
    </>
  );
}
 
export default KanbanPage;