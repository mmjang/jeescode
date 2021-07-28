/**
 * 植入在用户代码沙箱的iframe中，用于拦截console.log等信息，向父窗口传递
 */
!(function () {
  const oldConsoleLog = console.log;
  console.log = function (...args) {
    if (window.parent.sendMessage) {
      window.parent.sendMessage({
        type: "console.log",
        data: {
          content: args.join(),
        },
      });
    }
    oldConsoleLog(...args);
  };
})();
