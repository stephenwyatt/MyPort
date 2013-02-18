function JobCtrl($scope, $http) {
  $http.get('app/jobs/jobs.json').success(function(data){
  	$scope.jobs = data;
 });
}

function JobDetailCtrl($scope, $routeParams, $http) {
	$http.get('/app/jobs/' + $routeParams.jobId + '.json').success(function(data) {
		$scope.job = data;
	});
	}







function EducationCtrl($scope) {
	$scope.schools = [
	{
		"name":"Virginia Tech University","major":"Marketing","degree":"Bachelor's of Science","location":"Blacksburg,VA","url":"http://www.vt.edu"},
		{"name":"Virginia Commonwealth University","major":"Sports Marketing","degree":"Master's of Science","location":"Richmond,VA","url":"http://www.vcu.edu"},
		{"name":"Trident Technical College","major":"Digital Media","degree":"2 Semesters","location":"Charleston,SC","url":"http://www.tridentech.edu"},
		{"name":"Charleston Digital Corridor","major":"CodeCamp","degree":"jQuery and Ruby on Rails","location":"Charleston,SC","url":"http://www.charlestondigitalcorridor.com"},
		{"name":"Wake Technical College","major":"Spanish","degree":"Continuing Education","location":"Raleigh,NC","url":"http://www.waketech.edu"}
	]
};
function SkillsCtrl($scope) {
	$scope.skills = ['Adobe','Microsoft','Adobe DreamWeaver','Adobe Photoshop','Adobe FireWorks','Adobe Flash','Adobe InDesign',
'Apple Final Cut Pro','Adobe Illustrator','CSS / CSS3','WordPress','Elementary JavaScript','HTML / HTML 5','Microsoft Office',
'jQuery','Volusion E-commerce Software','Various CMS Systems','Ruby on Rails','Angularjs','Github'];
};
function PortfolioCtrl($scope) {
	$scope.projects = [ {"company":"Park West School Fund", "service":"School Education Fund"},
						{"company":"C Wilson HVAC", "service":"Heating and Air"},
						{"company":"Donald Servies", "service":"Home Improvement"},
						{"company":"The Charleston Business Leads Association","service":"Heating and Air"},
						{"company":"AIS Home Inspections", "service":"Home Inspections"},
						{"company":"Rooter-Man Plumbing", "service":"Plumbing"},
						{"company":"The Pet Mahal", "service":"Pet Grooming and Boarding"},




						];
};
function ContactCtrl($scope) {

};
function PersonalCtrl($scope) {

};
function GalleryCtrl($scope) {
	$scope.images = [
	{category: "west",image:'/app/img/super.jpg', thumbnail: '/app/img/supert.jpg',description:"Super Bowl 2013"},
	{category: "west",image:'/app/img/front3.jpg', thumbnail:'/app/img/front3t.jpg',description:"THE VAULT Clothing"},
	{category: "west",image:'/app/img/tide.jpg', thumbnail:'/app/img/tidet.jpg',description:"Alabama Notre Dame"},
	{category: "west",image:'/app/img/retro.jpg', thumbnail:'/app/img/retrot.jpg',description:"Original Retro Brand"},
	{category: "west",image:'/app/img/PLAYS.jpg', thumbnail:'/app/img/playst.jpg',description:"NFL Playoffs"}
	]

$scope.currentImage = _.first($scope.images);

$scope.imageCategories = _.uniq(_.pluck($scope.images, "category"));

$scope.setCurrentImage = function(image) {
	$scope.currentImage= image;
};
}









