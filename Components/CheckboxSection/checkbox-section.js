export default function CheckboxSection() {
    return(
        <ul>
            <li>
                <input type="checkbox" id="inline-checkbox" value="" class="hidden peer" required=""></input>
                <label for="inline-checkbox" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                    <div class="block">
                        
                    </div>
                </label>
            </li>
        </ul>
    );
}