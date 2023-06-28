const SkillPill = ({ skill }: { skill: string }) => {
  return (
    <div className='bg-white rounded-md px-3 py-1 text-xs font-semibold text-slate-500 cursor-cell'>
      {skill}
    </div>
  )
}

export default SkillPill
