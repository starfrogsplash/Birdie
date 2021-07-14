

import { GiMagnifyingGlass } from 'react-icons/gi'
import { IoPersonSharp } from 'react-icons/io5'
import { ImWarning } from 'react-icons/im'
import { BiTask } from 'react-icons/bi'

// interface Details {
//     colour: string;
//     icon: Function
// }

const colourMapping:Record<string, any> = {
    fluid_intake_observation: { backgroundColour: 'bg-blue-50', colour: 'rgb(33, 150, 243)', icon:  GiMagnifyingGlass},
    physical_health_observation: {backgroundColour: 'bg-blue-50', colour: 'rgb(33, 150, 243)', icon: GiMagnifyingGlass},
    incontinence_pad_observation: {backgroundColour: 'bg-blue-50', colour: 'rgb(33, 150, 243)', icon: GiMagnifyingGlass},
    no_medication_observation_received: {backgroundColour: 'bg-blue-50',colour: 'rgb(33, 150, 243)', icon: GiMagnifyingGlass},
    general_observation: {backgroundColour: 'bg-blue-50',colour: 'rgb(33, 150, 243)', icon: GiMagnifyingGlass},
    mood_observation: {backgroundColour: 'bg-blue-50',colour: 'rgb(33, 150, 243)', icon: GiMagnifyingGlass},
    task_completed:{backgroundColour: 'bg-green-50',colour: 'green', icon: BiTask},
    visit_completed: {backgroundColour: 'bg-green-50',colour: 'green', icon: BiTask},
    check_out: {backgroundColour: 'bg-purple-50', colour: '#9e32a8', icon: IoPersonSharp},
    check_in: {backgroundColour: 'bg-purple-50', colour: '#9e32a8', icon: IoPersonSharp},
    alert_raised: {backgroundColour: 'bg-red-50', colour: 'red', icon: ImWarning},
    regular_medication_taken: { backgroundColour: 'bg-blue-50', colour: 'rgb(33, 150, 243)', icon: GiMagnifyingGlass},
    regular_medication_not_taken: {backgroundColour: 'bg-blue-50',  colour: 'rgb(33, 150, 243)', icon: GiMagnifyingGlass},
    task_completion_reverted: { backgroundColour: 'bg-blue-50', colour: 'rgb(33, 150, 243)', icon: GiMagnifyingGlass},
    food_intake_observation: { backgroundColour: 'bg-blue-50', colour: 'rgb(33, 150, 243)', icon: GiMagnifyingGlass},
    mental_health_observation: { backgroundColour: 'bg-blue-50', colour: 'rgb(33, 150, 243)', icon: GiMagnifyingGlass},
    medication_schedule_updated: { backgroundColour: 'bg-blue-50', colour: 'rgb(33, 150, 243)', icon: GiMagnifyingGlass},
    visit_cancelled: {backgroundColour: 'bg-blue-50',  colour: 'rgb(33, 150, 243)', icon: GiMagnifyingGlass},
}


export {colourMapping}