var vue = require('../lib/vue.js')
var Swiper = require('../lib/swiper.js')
//

//	vue.component('child1',{
//		template:"<p>this is ch</p>"
//	})
//	
//	vue.component('child2',{
//		template:"<p>123</p>"
//	})
	
var data = {counter:0}
//
new vue({
	
	el:'#m-index',
	data:{
	swiper:null,
	active:0,
	navIndex:0,
		list:[],

		nav:[
			{
				name:"-热门话题-",
				isActive:true,
				view:'child1'
				
			},
			{
				name:"-精彩活动-",
				isActive:false,
				view:'child2'
			}
		],
		
		footer:[
			{
				meta:"&#xe629",
				adder:"首页"
			},
			{
				meta:"&#xe6a9",
				adder:"话题"
			},
			{
				meta:"&#xe61b",
				adder:"活动"
			},
			{
				meta:"&#xe698",
				adder:"集市"
			},
			{
				meta:"&#xe66d",
				adder:"我的"
			}
		]
},



methods:{
	
	changeTab:function(index){
		this.swiper.slideTo(index,0,false)
//		console.log(this.swiper)
		console.log(index)	
		this.navIndex = index;
	}
},

mounted:function(){
	fetch('/api/list').then(response=>response.json())
	.then(res=>{
		this.list = res;
		this.swiper = new Swiper('#fuck-swiper',{
			loop:false,
			noSwiping : true,
			noSwipingClass : 'stop-swiping'
		});
	})
	.catch(e=>console.log("Oops,error",e));
}
});



var myswiper =  new Swiper("#index-swiper",{
//	loop:false
	pagination : '.swiper-pagination'
})

