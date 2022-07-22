import React,{useEffect,useState,useRef} from 'react';
import axios from 'axios';
import Rating from '@mui/material/Rating';


const ClassReview = () => {


    const getReviews=()=>{
        axios.get()
        .then(res=>{
        })
    }

    useEffect(()=>{
        getReviews();
    },[])

    return (
        <div>

                <div className="class_reviewrow">
                    {/* 리뷰info */}
                    <div className="class_reviewerinfo">
                        <div class="tutor_image" style={{float:'left'}}>

                        </div>
                        <span className="class_reviewername" >
                            김정하
                        </span><br/>
                        <span className="class_reviewertime" >
                            2022-07-04 03:58
                        </span>
                        <div className="class_review_star">
                            <Rating
                                name="size-medium"
                                size='large'
                                onChange={(e) => {
                                }}
                            />
                        </div>

                        <textarea className='class_reviewcontent' style={{fontSize:'15px'}} placeholder="리뷰를 작성해주세요"/>
                        <div className="class_reviewphoto"></div>
                        <div className="commentlike"> ♥27 ㅁ12</div>
                        {/* 댓글 */}
                        <div className="class_reviewcomment">
                            <div className="re_info">
                                <div class="tutor_image" style={{float:'left'}}>

                                </div>
                                <span className="class_reviewername" >
                                    이경주
                                </span><br/>
                                <span className="class_reviewertime" >
                                    2022-07-04 03:58
                                </span>
                            </div>
                            <div className="class_commentbody" style={{fontSize:'15px'}}>
                                하하하 저도 배우고싶네용
                            </div>
                            <div className="class_commentdell">
                                <button style={{float:'right', marginTop:'5px'}} className="btn4">삭제</button>
                            </div>
                        </div>
                    </div>

                    
                    
                </div>{/* class_reviewrow */}
        </div>
    );
};

export default ClassReview;