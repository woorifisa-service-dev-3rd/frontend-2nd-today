const Slider = ({range, setRange}) => {
    return (
        <input type="range" value={range} onChange={(event) => setRange(event.target.value)} className="w-50 h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
    )
}

export default Slider