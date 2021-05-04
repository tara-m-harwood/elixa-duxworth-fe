// MessageParser starter code in MessageParser.js
class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    
    this.actionProvider.elixa(message)
    
    // const lowerCaseMessage = message.toLowerCase();

    // if (lowerCaseMessage.includes("hello")) {
    //   this.actionProvider.greet();
    // }

    // if (lowerCaseMessage.includes("javascript")) {
    //   this.actionProvider.handleJavascriptList();
    // }
  }
}

export default MessageParser;
