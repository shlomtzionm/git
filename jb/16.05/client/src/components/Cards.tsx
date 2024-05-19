import { Card as AntdCard, Col, Row } from 'antd';
import { CradEntitie } from '../entities/CardEntitie';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';


interface cardsProps{
    children : CradEntitie[];
    onChange : ()=> void
}
export const  Cards = (props:cardsProps) => {
const {children, onChange} = props

const handleDelete = (id:number)=>{
    const raw = "";

    const requestOptions = {
      method: "DELETE",
      body: raw,
      redirect: "follow"
    };
    
    fetch(`http://localhost:3000/todo/${id}`, requestOptions)
      .then((response) => response.json())
      .then((json) => {console.log(json); onChange()})
      .catch((error) => console.error(error))

}

return(<>
<Row gutter={16}>
        {children.map((child,index)=>(
             <Col span={20} key={index}>
            <AntdCard title={child.task} bordered={false}
                  actions={[
                    <DeleteOutlined key="delete" onClick={()=>handleDelete(child.id)}/>,
                    <EditOutlined key="edit" />,
                  ]}>{child.value}</AntdCard>
           </Col>
        ))}
    
</Row>

</>)
}