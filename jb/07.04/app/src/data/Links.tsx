
import { Row } from "antd"
import {characters} from "../data/rickAndMorty"

export const Links = ()=>{
return(<>
{characters.map((character)=>{
    <Row>
        return <col>{character.name}</col>
    </Row>
})}
</>)
}