import './index.css'
export default function Card(_props:any){
    return(
        <>
            <div className="card text-white bg-dark mb-3 layout">
                <div className="card-header">{_props.title}</div>
                <div className="card-body">
                    {_props.children}
                </div>
            </div>    
        </>
    );
}