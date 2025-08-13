1.dialog - you cannot interact with any element behind dialog(inertness), but you can do it in popover
2.example of compound pattern :
<MainComponent>
<MainComponent.ChildComp1 prop1={prop1}/>
<MainComponent.ChildComp2 > children prop</MainComponent.ChildComp2 >
</MainComponent> 

