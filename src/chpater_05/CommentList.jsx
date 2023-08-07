import React from "react";
import Comment from "./Comment";

const comments = [ 
    {
        imagesrc: "https://mblogthumb-phinf.pstatic.net/MjAxNzA4MjJfMjcw/MDAxNTAzMzU1NTI5Mjg0.OBV0OZkJQHRZzIWAtVDM60JLl9wq5WwiwnRTwgYqDq4g.II9maLicfuatQ8bxN7F6uUt1ZVa_95hP2OVB0Ig4uf8g.JPEG.doghter4our/IMG_0907.jpg?type=w800",
        name: "바나나차차",
        comment: "여기에 댓글을 써요.",
    },
    {
        imagesrc: "https://img.danawa.com/prod_img/500000/786/111/img/5111786_1.jpg?_v=20200420101014",
        name: "호두마루",
        comment: "여기요?",
    },
    {
        imagesrc: "https://storage.enuri.info/pic_upload/knowbox2/202301/072816910202301204ab9afc9-d3c5-43e9-9159-8e85d98e0a0b.jpg",
        name: "네이마루",
        comment: "네이마 루!",
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment imagesrc={comment.imagesrc} name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;