const processLogStrings = (logsBufferString:string):any[] => {
    const logsArray:any = logsBufferString.split(/\r?\n/);
    const tsCapture:string = "(.{" + "2021-08-09T02:12:51.264Z".length + "})";
    const levelCapture:string = "(error|warn|debug|info)";
    const stringCapture:string = "(.+)";
    const reg:any = new RegExp(
      "^" + tsCapture + " - " + levelCapture + " - " + stringCapture + "$"
    );
    let requiredLogs:any[]  = [];
    logsArray.map((line:string) => {
      const [, timestamp, logLevel, str]:any = line.match(reg);
      if (logLevel == "error" || logLevel == "warn") {
        requiredLogs.push({ timestamp, logLevel, ...JSON.parse(str) });
        return null;
      }
    });
  
    return requiredLogs;
  };

  export default processLogStrings;