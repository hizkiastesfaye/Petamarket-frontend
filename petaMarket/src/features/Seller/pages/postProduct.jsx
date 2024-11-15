
export default function PostProduct(){
    return <>
        <form className="mx-auto rounded mt-20 border-2 w-[calc(70%)] p-5">
            <h1 className="text-2xl mx-auto w-fit my-10 font-bold">Add product</h1>
            <div className="flex justify-around items-center">
                <label htmlFor="name">Product name:</label>
                <input 
                    type="text" 
                    name="name"
                    placeholder="product name"
                    className="w-[calc(70%)] border rounded focus:outline-none focus:border-blue-500 pl-5"
                />
            </div>
            <div className="flex justify-around">
                <label htmlFor="catagory">Catagory</label>
                <input
                    type="text" 
                    name="catagory"
                    className="w-[calc(70%)] border rounded focus:outline-none focus:border-blue-500 pl-5"
                />
            </div>
        </form>
    </>
}