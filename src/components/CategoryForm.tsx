

function CategoryForm() {


    return (
        <>
        <form>
            <label>Create Category</label> 
            <div className="createBar">
            <input type="text" placeholder="Enter name..."></input>
            </div>
            <button className="createCategoryBtn">Create</button>
        </form>
        </>
    )

}

export default CategoryForm