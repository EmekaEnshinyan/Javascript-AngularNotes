
//FOLLOWING QUESTIONS FROM https://www.w3docs.com/quiz/angular

//What will be the result of the below program?

function f(input: boolean) {
let a = 100;
if (input) {
let b = a + 1;
}
return b;
}

//In Angular, you can pass data from the parent component to the child component by using:

 @Output()
 @Input()
 Input
 Output
 
 //In Angular, you can pass data from the child component to the parent component by using:

 @Output()
 @Input()
 Input
 Output
 
 //Which directive connects the value of the controls to the data?

 ng-app
 ng-init
 ng-model

//Which directive modifies DOM hierarchy?

 Structural directive
 Attribute directive
 
 //Which is the correct form control class name that is set to true via [(ngModel)] whenever value is changed?

 .ng-invalid
 .ng-pending
 .ng-pristine
 .ng-dirty

//How many instances of service will be created if you provide a custom service in two components’ “providers” section of @Component decorator?

 1
 2
 3
 4


//Custom pipe can modify actual value of variable apart from different presention in HTML.

 True
 False

 //In Angular routing, which tag is used to render matched component via active route?

 <router></router>
 <router-output></router-output>
 <router-outlet></router-outlet>
 <router-display></router-display>

//Which method of RouterModule should be called for providing all routes in AppModule?

 RouterModule.forChild
 RouterModule.forRoot
 RouterModule
 RouterModule.import

//Async Pipe subscribes to observer and updates expression whenever there is data sent from observer.

 True
 False

 //Which command is used to run the Static Code analysis of Angular application?

 ng build
 ng profile
 ng lint
 ng serve

 //Router service needs to be explicitly provided in angular module to use it in another component via DI.

 True
 False
 
 //You can chain multiple pipe in a single expression along with “async” pipe.

 True
 False

 //Which component represents “target/host” DOM element inside Directive’s constructor?

 Element
 ElementRef
 Host
 Target
 
 //Which command must be used to build an application in production mode?

 ng build
 ng serve
 ng build --prod
 ng lint
 
 //Which decorator does the directive use to listen to the host/target events?

 @Listener
 @HostListener
 @OnListener
 @TargetListener

//There can be more than one <router-outlet> element in Angular application.

 True
 False
 
 //Which service can be used to extract route parameters inside component?

 Router
 Route
 ActivatedRoute
 CurrentRoute
