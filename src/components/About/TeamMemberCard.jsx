
const TeamMemberCard = ({ member }) => {
   return (
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition flex flex-col items-center text-center">
         <img src={member.image} alt={member.name} className="w-24 h-24 object-cover rounded-full mb-4" />
         <h3 className="text-lg font-bold">{member.name}</h3>
         <p className="text-sm font-semibold text-blue-900">{member.role}</p>
         <p className="text-xs font-medium text-gray-700 mt-2">{member.bio}</p>
      </div>
   )
}

export default TeamMemberCard