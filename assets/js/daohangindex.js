$(function(){
    var str=' <ul class="nav" id="main-menu">'+
    '<li class="active-link">'+
           '<a href="src/springcloud/pdf.html" ><i class="fa fa-desktop "></i>个人简历 </a>'+
           '</li>'+
    '<li class="active-link" onclick="doshowul(this)">'+
           '<a href="javascript:void(0)" ><i class="fa fa-desktop "></i>SrpingCloud技术学习总结 </a>'+
    '</li>'+
    '<ul class="child-ul">'+
       '<li class="active-link">'+
           '<a href="src/springcloud/dependencies.html" ><i class="fa fa-desktop "></i>创建统一依赖 </a>'+
       '</li>'+
       '<li class="active-link">'+
           '<a href="src/springcloud/erueka.html" ><i class="fa fa-desktop "></i>服务注册与发现 </a>'+
       '</li>'+
       '<li class="active-link">'+
           '<a href="src/springcloud/feign.html" ><i class="fa fa-desktop "></i>创建服务消费者feign </a>'+
       '</li>'+
       '<li class="active-link">'+
           '<a href="javascript:void(0)" ><i class="fa fa-desktop "></i>熔断器/监控 </a>'+
       '</li>'+
       '<li class="active-link">'+
           '<a href="src/springcloud/zuul.html" ><i class="fa fa-desktop "></i>统一网关监控zuul/过滤功能 </a>'+
       '</li>'+
       '<li class="active-link">'+
           '<a href="javascript:void(0)" ><i class="fa fa-desktop "></i>SrpingCloud服务配置</a>'+
       '</li>'+
   '</ul>'+
   '<li class="active-link" onclick="doshowul(this)">'+
           '<a href="javascript:void(0)" ><i class="fa fa-desktop "></i>JVM学习 </a>'+
    '</li>'+
   '<ul  class="child-ul">'+
   '<li class="active-link">'+
           '<a href="src/springcloud/jvm.html" ><i class="fa fa-desktop "></i>JVM概念和结构 </a>'+
       '</li>'+
   '</ul>'+
'</ul>';
    $(".sidebar-collapse").append(str);
})