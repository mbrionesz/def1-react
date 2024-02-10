import Badge from 'react-bootstrap/Badge';
                                                                                                                                                                                                                                                                                                                                                                 
const Tags = ({ colorTag, textTag }) => {
  return (
    <>
        <Badge bg={colorTag}>{textTag} </Badge>
    </>                                                                                                                                                                                   
  )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
};

export default Tags;