import { useLocation } from 'react-router-dom';

function List() {
  // params接受参数
  const location = useLocation();
  const data = location.state;
  console.log(data);
  
  return (
    <>
    <div>/list</div>
  </>
  )
}

export default List
