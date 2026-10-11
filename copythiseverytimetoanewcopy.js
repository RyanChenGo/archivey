<script>
  document.addEventListener('click', function(event) {
    // 寻找被点击的超链接 (a 标签)
    const link = event.target.closest('a');
    
    if (link) {
      const href = link.getAttribute('href');
      
      // 判断条件：如果是外部网址（以 http/https 开头），或者是无意义的空锚点
      if (href && (href.startsWith('http://') || href.startsWith('https://'))) {
        // 阻止默认的网页跳转行为！
        event.preventDefault();
        
        // 弹出你指定的警告提示
        alert(
          "Please return to homepage !\n" +
          "We didn't save the link that you clicked !\n" +
          "Return and research again the copies !"
        );
      }
    }
  }, true);
</script>