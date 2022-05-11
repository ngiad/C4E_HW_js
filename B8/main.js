// let Data = []
// let day = Number(prompt("Nhap ngay : "))
// Data[0] = day
// console.log("Ngay duoc luu : " + Data[0])

// let month = Number(prompt("Nhap thang : "))
// Data[1] = month
// console.log("Thang duoc luu : " + Data[1])

// let year = Number(prompt("Nhap nam : "))
// Data[2] = year
// console.log("Nam duoc nhap : " + Data[2])

 
// let NextData = [] 

// //Tinh nam nhuan

// let year2Month28 = Data[2]%4
// //điều kiện ngay của năm nhuận
// if (year2Month28 == 0 && Data[1] == 2) {
//     NextData[0] = Data[0] + 1
//     nextDay = NextData[0]
//     console.log("Ngay tiep theo : " + nextDay)
// }
// if(year2Month28 > 0){
//     nextDay = 1
//     console.log("Ngay tiep theo : " + nextDay)
// }


function see_answer(){
    alert("Xin chào tôi là 1 siêu máy tính học việc")
}

function input_answer(){
    let Data = []
    
    let day = Number(prompt("Nhap ngay : "))
    if(isNaN(day)){
        alert("Nhap so vao from hoi dap !!")
    }else if(day > 31){
        alert("khong co ngay lon hon ngay 31")
    }else{
        Data[0] = day
        console.log("Ngay duoc luu : " + Data[0])
    }
    
    let month = Number(prompt("Nhap thang : "))
    if(isNaN(month)){
        alert("Nhap so vao from hoi dap !!")
    }else if(month > 12){
        alert("Khong co thang lon hon 12")
    } else{
        Data[1] = month
        console.log("Thang duoc luu : " + Data[1])
    }
    let year = Number(prompt("Nhap nam : "))
    if(isNaN(year)){
        alert("Nhap so vao from hoi dap !!")
    }else{
    Data[2] = year
    console.log("Nam duoc nhap : " + Data[2])
    }
    return Data
}

function nextDay(date_count){
    let MonthDay = [4,6,9,11]
    let to_day = Number(date_count[0])
    let current_month = Number(date_count[1])
    let current_year = date_count[2]
    let month_threety_Day = MonthDay.includes(current_month)
    let leap_year = Number(current_year)%4

    if(leap_year == 0 && current_month == 2 && to_day == 28){
        console.log("Nam nhuan")
        next_day = 1
        current_month += 1
        console.log("Ngay tiep theo la :" + next_day + "/" + current_month + "/" + current_year)
    }else if(to_day == 31 &&current_month == 12){
        current_year += 1
        next_day = 1
        current_month = 1
        console.log("Ngay tiep theo la :" + next_day + "/" + current_month + "/" + current_year)
    }else if(to_day == 30&&month_threety_Day){
        next_day = 1
        current_month += 1
        console.log("Ngay tiep theo la :" + next_day + "/" + current_month + "/" + current_year)
    }else if(to_day > 30 &&month_threety_Day){
        alert("Khong co ngay 31 trong thang :" + " " + current_month)
        console.log("Khong co ngay 31 trong thang :" + " " + current_month)
    }else{
        next_day = to_day + 1
        console.log("Ngay tiep theo la :" + next_day + "/" + current_month + "/" + current_year)
    }
}


function main(){
    see_answer()
    let Date_Today = input_answer()
    nextDay(Date_Today)
}


// Bắt đầu chương trình 
main()
