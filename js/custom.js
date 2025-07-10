document.addEventListener("DOMContentLoaded", function() {
    var codeBlocks = document.querySelectorAll("pre code");

    codeBlocks.forEach(function(block) {
        var lines = block.textContent.split("\n").length;

        if (lines > 15) { // 设定折叠的行数阈值
            var container = block.parentNode;
            container.classList.add('code-block');

            // 创建一个按钮用于展开/折叠代码
            var toggleButton = document.createElement("button");
            toggleButton.textContent = "展开完整代码";
            toggleButton.classList.add("toggle-button");

            // 在代码块前插入按钮
            container.insertBefore(toggleButton, block);

            toggleButton.addEventListener("click", function() {
                if (container.classList.contains("expanded")) {
                    container.classList.remove("expanded");
                    toggleButton.textContent = "展开完整代码";
                } else {
                    container.classList.add("expanded");
                    toggleButton.textContent = "收起代码";
                }
            });
        }
    });
});
