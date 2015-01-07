var kse=require("ksana-search");
var maincomponent = React.createClass({
  getInitialState:function() {
  	return {result:[]};
  },
  componentDidMount:function() {
  	kse.search("law6","依法",{range:{start:0}},function(err,data){
  		this.setState({result:data.excerpt});
  	},this);
  },
  render: function() {
    return <div>Hello {this.state.result}</div>;
  }
});
module.exports=maincomponent;