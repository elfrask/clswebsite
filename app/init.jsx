



class Apppage extends React.Component {
    render() {
        return (
            <div>
                <Cuerpo>
                    <div className="medio">
                        <div style={{
                            width:"calc(100% - 40px)",
                            maxWidth:"500px",
                            backgroundColor:"#111",
                            padding:"20px"
                        }}>
                            <Clscode code={
                                `
#Procedimiento de Fibonacci
function fibonacci(fib:int = 100) -> Array {

    var list:Array = [];

    for (i = 0; 0 < fib; i++) {
        list.append(list[-2] + list[-1])
    };

    return list
};

fibonacci(100)
                                `
                                } />
                        </div>
                    </div>
                </Cuerpo>
            </div>
        )
    }
}







ReactDOM.render(<Apppage />, go("__body__"), () => {})
