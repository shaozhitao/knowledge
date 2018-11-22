//只是谢了一个方法，通过jsonp请求实现跨域请求
initData(){
    var _that=this;
    var url="http://218.196.123.82:8811/ionicDa/lampData1/?callback=JSONP_CALLBACK";
    this.jsonp.get(url)
    .subscribe(
      function(data){
        var data1 = data['_body'];  //获取数据
        if(data1['led1']==1){
          console.log('led1');
          document.getElementById('lamp1_12b').style.backgroundColor='green'; //通过dom操作按钮节点进行更改颜色
          document.getElementById('lamp1_13b').style.backgroundColor='#2F4964';
          _that.run1='NO';  //直接对变量进行
          _that.stop1='--';
        }else{
          console.log('led2');
          document.getElementById('lamp1_12b').style.backgroundColor='#2F4964';
          document.getElementById('lamp1_13b').style.backgroundColor='red';
          _that.run1='--';
          _that.stop1='OFF';
        };
        if(data1['led2']==1){
          document.getElementById('lamp2_12b').style.backgroundColor='green';
          document.getElementById('lamp2_13b').style.backgroundColor='#2F4964';
          _that.run2='NO';
          _that.stop2='--';
        }else{
          document.getElementById('lamp2_12b').style.backgroundColor='#2F4964';
          document.getElementById('lamp2_13b').style.backgroundColor='red';
          _that.run2='--';
          _that.stop2='OFF';
        };
        if(data1['led3']==1){
          console.log(111111)
          document.getElementById('lamp3_12b').style.backgroundColor='green';
          document.getElementById('lamp3_13b').style.backgroundColor='#2F4964';
          _that.run3='NO';
          _that.stop3='--';
        }else{
          document.getElementById('lamp3_12b').style.backgroundColor='#2F4964';
          document.getElementById('lamp3_13b').style.backgroundColor='red';
          _that.run3='--';
          _that.stop3='OFF';
        };
        if(data1['led4']==1){
          document.getElementById('lamp4_12b').style.backgroundColor='green';
          document.getElementById('lamp4_13b').style.backgroundColor='#2F4964';
          _that.run4='NO';
          _that.stop4='--';
        }else{
          document.getElementById('lamp4_12b').style.backgroundColor='#2F4964';
          document.getElementById('lamp4_13b').style.backgroundColor='red';
          _that.run4='--';
          _that.stop4='OFF';
        };
        
      },function(err){
        console.log(err);
      })
  },1000)
  }