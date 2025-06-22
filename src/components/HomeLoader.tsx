

function HomeLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center p-6">
    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
      
      {/* Texte */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">
          Titre principal
        </h1>
        <p className="text-lg text-gray-600">
          Sous-titre ou description courte
        </p>
        <p className="text-gray-500">
          Description plus longue avec plus de détails sur le contenu.
        </p>
      </div>
      
      {/* Image/SVG */}
      <div className="relative h-64 md:h-96">
        <img 
          src="/api/placeholder/400/400" 
          alt="Description"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>
      
    </div>
  </div>
  )
}
export default HomeLoader;