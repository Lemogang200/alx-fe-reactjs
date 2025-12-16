import { useEffect, useState } from 'react'
import recipesData from '../data.json'

const HomePage = () => {
  const [recipes, setRecipes] = useState([])
  useEffect(() => {
    setRecipes(recipesData)
  }, [])

    return (
        <div className="p-6">
            <h1 className="text-3xl font-boldmb-6 text-center">
                Recipe Collection
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {recipes.map((recipe) => (
                    <div
                        key={recipe.id}
                        className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:scale-105">
                         <img
                         src={recipe.image}
                         alt={recipe.title}
                         className="w-full h-48 object-cover"/>

                         <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">
                                {recipe.title}
                            </h2>
                            <p className="text-gray-600 text-sm">
                                {recipe.description}
                            </p>
                         </div>
                    </div>
                ))}   
            </div>
        </div>
    )

}

export default HomePage