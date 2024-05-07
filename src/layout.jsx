export default function Layout(props){
    
    return(
        <div className="wrap">
            <header>
                Header
            </header>
            
            <main className="main">
                {props.children}
            </main>
            
            <footer>
                Footer
            </footer>
        </div>
    )
    
}