/**
 * 植入在用户代码沙箱的iframe中，用于拦截console.log等信息，向父窗口传递
 */
!(function () {
  const oldConsoleLog = console.log;
  // 用来构造唯一的key值
  const sessionId = Date.now();
  let sessionIndex = 0;

  console.log = function (...args) {
    if (window.parent.sendMessage) {
      setTimeout(() => {
        window.parent.sendMessage({
          id: `${sessionId}_${sessionIndex++}`,
          type: "console.log",
          data: {
            content: args.join(),
          },
        });
      });
    }
  };
})();
