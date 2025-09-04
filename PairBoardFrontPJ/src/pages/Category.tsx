import { Pagination } from "@mui/material";

export default function Category() {
 
// const ActivityCard = (props)=>{
  
//    return (
//  <CardContent>
//                 <CardTitle>{props.activity.title}</CardTitle>
//                 <CardDetail>
//                     {props.activity.content}
//                 </CardDetail>
//                 <CardDetail>
//                     작성자 : {props.activity.email}
//                 </CardDetail>
//                 <CardDetail>
//                     작성일자 : {props.activity.createdDate}
//                 </CardDetail>
//                 <CardDetail>좋아요 : {props.activity.like}</CardDetail>
//                 <button>자세히 보기</button>
//             </CardContent>
//   );
// }

// export default ActivityCard;

// https://velog.io/@sjkang930/react-cjm2dzbh
    
    return(
        <>
            
            <Pagination count={10} />
        </>
    )
}