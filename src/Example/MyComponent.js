import React from "react";

class MyComponent extends React.Component {

    state = {
        firstName: '',
        lastName: '',
    }

    handleChangeFirstName = (event) => {
        this.setState ({ //dùng hàm để cập nhật state
            firstName: event.target.value //lấy giá trị của 'event'.truy cập đến thuộc tính input(dùng target).lấy giá trị của thằng 'value'
        })
    }

    handleChangeLastName = (event) => {
        this.state ({
            lasteName: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault() //tránh refresh lại trang
        console.log('>>> check data input',this.state) //state đang chứa data
    }

    render() {
        console.log('>>> call render: ',this.state)

        return(
            //React.Fragment - dấu <> </> bên dưới là viết tắt của <React.Fragment></React.Fragment>
            <> 
                <form>
                    <label htmlFor="fname">First name:</label><br/>
                    <input 
                    type="text" 
                    value={this.state.firstName} //cập nhật giá trị real-time cho ô firstName
                    onChange={(event) => this.handleChangeFirstName(event)} //gọi State và dùng onChange để thay đổi giá trị trực tiếp
                    />
                    <br/> 
                    <label htmlFor="lname">Last name:</label><br/>
                    <input 
                    type="text" 
                    value={this.state.lastName}
                    onChange={(event) => this.handleChangeLastName(event)}
                    />
                    <br/><br/>
                    <input type="submit"
                        onClick={(event) => this.handleSubmit(event)} //chạy khi bạn bấm nút
                    />
                </form> 
            </>
        )
        
    }
}

export default MyComponent;

//Hãy learn by doing, không biết thì gg =))

//đã xong bài 9 ở phút thứ 25:00
