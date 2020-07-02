const menuList = [
    {
        title:'首页',
        key:"/home",
        icon:'home'
    },
    {
        title:'商品',
        key:'/products',
        icon:'appstore',
        children:[
            {
                title:'品类管理',
                key:"/category",
                icon:'bars'
            }, {
                title:'商品管理',
                key:"/product",
                icon:'tool'
            }
        ]
    },
    {
        title:'用户管理',
        key:"/user",
        icon:'user'
    },
    {
        title:'角色管理',
        key:"/role",
        icon:'tool'
    },
    {
        title:'图形图表',
        key:"/charts",
        icon:'tool',
        children:[
            {
                title:'pie',
                key:"/charts/pie",
                icon:'bars'
            }, {
                title:'line',
                key:"/charts/line",
                icon:'tool'
            }, {
                title:'bar',
                key:"/charts/bar",
                icon:'tool'
            }
        ]
    }

]

export default menuList