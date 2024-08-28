import React from "react";

class MyComponent extends React.Component {

    state = { //là một Object
        name: '',
        channel: 'xunhiep'
    }

    handleOnChangeName = (event) => {
        //this.state.name = event.target.value; đây là bad code
        //k bao giờ gọi state trực tiếp giống bên trên mà hãy dùng cái hàm gọi state giống bên dưới -> đi lâu dài
        //merge
        this.setState({
            name: event.target.value
        })
    }

    handleClickButton = () => {
        alert('Click me')
    }

    //re-render
    render() { //ở trong class thì function kh cần khai báo function
        
        let name = 'hiep';

        return( //phải bao tất cả trong 1 lớp bọc 'dev', đây là nguyên tắc của JSX
            <React.Fragment>  {/* thay cho việc bạn phải học thẻ div bên ngoài */}
                <div className="first">
                    <input value={this.state.name} type='text'
                        onChange={(event) => this.handleOnChangeName(event)}
                    />
                </div>

                <div className="second">
                hello my again, my name is { this.state.name }, and my youtube channel is {this.state.channel} 
                {/* this = MyComponent(tên class). state(object). name(pros của thằng object) */}
                </div>

                <div className="third">
                    <button onClick={ () => this.handleClickButton() }>Click me</button> 
                    {/* phải dùng adofunction thì mới gọi nó được */}
                </div>
            </React.Fragment>
        )
        
    }
}

export default MyComponent; //trả về MyComponent

//Hãy learn by doing, không biết thì gg =))

//đã xong bài 7
