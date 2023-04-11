<Teleport to="body">  //传送到body身上
    <Loading></Loading>
</Teleport>
------------------------------------------------------
<Teleport
  :disable="true"
  to="body"
>  //这样就无法传送了，disable是接收true和false这对布尔值的，决定了传送生不生效
    <Loading></Loading>
</Teleport>
