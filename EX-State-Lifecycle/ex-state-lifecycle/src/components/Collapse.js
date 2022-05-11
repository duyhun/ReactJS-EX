import { Component } from "react";

export default class Collapse extends Component {
    constructor(pros) {
        super(pros);
    }
    render() {
        return (
            <div className="container text-center">
                <h1 className="p-3 mb-2 bg-danger text-white" > Conditional Rendering </h1>
                <button className="btn btn-success" onClick={this.props.onClick} > {this.props.label} </button>
                <p className="p-3 mb-2"> Khai báo hàm handler cập nhật lại giá trị isExpand, mỗi lần handle được gọi, sử dụng setState() để cập nhật lại giá trị của isExpand bằng true hoặc false
                    Gọi hàm render để thể hiện các element bao gồm
                    Title “Conditional Rendering”
                    Kiểm tra điều kiện để render giao diện (conditional rendering)
                    Nếu isExpand là false, hiển thị button “Xem giới thiệu”
                    Nếu isExpand là true, hiển thị button “Đóng giới thiệu” và Nội dung giới thiệu
                    Xử lí sự kiện với hàm handler: sử dụng onClick của button để gọi tới hàm handler đã tạo bên trên </p>
            </div>
        )
    }
}