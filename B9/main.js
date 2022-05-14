function alert_user(){
    alert("Bài tập 1: tạo giả hàng")
}

function product(){
    let product_items = ["Iphone 5","Iphone 6","Iphone 7","Iphone 8"]
    let product_screen = product_items
    console.table(product_screen)
    console.log("Chọn sản phẩm muốn mua")
    return product_items
}


function cart(items){
    let items_cart = items
    let buy_it = []
    let choose = Number(prompt("Chọn số sản phẩm muốn mua :" ))
    let row_by = choose
    if(isNaN(choose)){
        console.log("Chọn số sản phẩm muốn mua")
    }else if(row_by === 0){
        console.log("Bạn chọn mua Iphone 5")
        buy_it[buy_it.length] = items[0]
        console.log("giỏ hàng của bạn có :" +buy_it)
    }else if(row_by === 1){
        console.log("Bạn chọn mua Iphone 6")
        buy_it[buy_it.length] = items[1]
        console.log("giỏ hàng của bạn có :" +buy_it)
    }else if(row_by === 2){
        console.log("Bạn chọn mua Iphone 7")
        buy_it[buy_it.length] = items[2]
        console.log("giỏ hàng của bạn có :" +buy_it)
    }else if(row_by === 3){
        console.log("Bạn chọn mua Iphone 6")
        buy_it[buy_it.length] = items[3]
        console.log("giỏ hàng của bạn có :" +buy_it)
    }else{
        console.log("Sản phẩm bạn trọng không có trong danh mục bán hàng")
    }
    return buy_it
}

function main(){
    alert_user()
    product()
    items = product()
    cart(items)
}
main()