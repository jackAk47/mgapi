// C-1 【请求参数】和【返回参数】的key值 统一规范为snake_case


var params = {
  goods_type    : '',
  my_user_id    : '',
  current_page  : '',
  page_size     : '',
  order_no      : order_no(),
  channel       : 'UFZT',
  service       : 'goods_list'
};


$.ajax({type:'POST', dataType:'text', url:'/', data: params,
        success:function(data,s,xhr){console.log(data);}});
