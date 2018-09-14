import React, {Component} from 'react';



import pp4 from "../images/procces.png";

class Process extends Component {
    render() {
        return (
            <div className="process">
                <div className="jumbotron blue-jumbo">
                    <div className="container blue-container">

                        <strong>
                            <p className="name"> پروسه عکاسی</p>
                        </strong>
                        <div className="row">
                            <p>ما در تمام مراحل کار جویای نیازهای عکاسی شما هستیم تا آنچه شما در نظر دارید را تهیه و تولید کنیم وبرای تهیه عکس و فیلم برای شما مجهز به دوربین های حرفه ای مختلف با کارایی های مختلف و لنزهای متعدد هستیم. یکی از دلایل قیمت بالای کار ما این است که برای مثال در ازای تحویل هر 100 عکس به طور متوسط 500 الی 1000 عکس میگیریم و برای هر عکس تحویلی به طور متوسط 30 دقیقه زمان برای روتوش میگذاریم. کار ما صرفا با فشار دادن دکمه دوربین تمام نمیشود و تا به دست آوردن رضایت شما از عکس و فیلم مورئ نظر شما همراهی میکنیم.</p>
                            <img src={pp4} alt=""/>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Process;