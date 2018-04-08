(function ($) {
  $.fn.dragDiv = function (divWrap) {
    return this.each(function () {
      var $divMove = $(this); //������ק����
      var $divWrap = divWrap ? $divMove.parents(divWrap) : $divMove; //�����ƶ�����
      var mX = 0,
        mY = 0; //�������X��Y��
      var dX = 0,
        dY = 0; //����div����λ��
      var isDown = false; //mousedown���
      if (document.attachEvent) { //ie���¼���������קdivʱ��ֹѡ�����ݣ�firefox��chrome����css�����ù�-moz-user-select: none; -webkit-user-select: none;
        $divMove[0].attachEvent('onselectstart', function () {
          return false;
        });
      }
      $divMove.mousedown(function (event) {
        var event = event || window.event;
        mX = event.clientX;
        mY = event.clientY;
        var off = $divWrap.offset();
        if(!off) return;

        dX = off.left;
        dY = off.top;
        isDown = true; //�����ק��
      });
      $(document).mousemove(function (event) {
        var event = event || window.event;
        var x = event.clientX; //��껬��ʱ��X��
        var y = event.clientY; //��껬��ʱ��Y��
        if (isDown) {
          $divWrap.css({
            "left": x - mX + dX,
            "top": y - mY + dY
          }); //div��̬λ�ø�ֵ
        }
      });
      $divWrap.mouseup(function () {
        isDown = false; //�����ק����
      });
    });
  };
})(jQuery);
