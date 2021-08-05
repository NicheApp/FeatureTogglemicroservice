package com.annr.Toggle2.endpoint;


import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.annr.Toggle2.model.Togglemodel;
import com.annr.Toggle2.repository.Togglerepository;
import com.annr.Toggle2.request.Feature;
import com.annr.Toggle2.request.Feature2;
import com.annr.Toggle2.request.Rule;
import com.annr.Toggle2.request.SearchCriteria;
import com.annr.Toggle2.request.Singlerule;
import com.annr.Toggle2.service.FeatureService;
import com.annr.Toggle2.service.ToggleService;




@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/toggle")
public class FeatureBits {
	public  List<Togglemodel> featureConfig=new ArrayList<>();

	@Autowired
	public Togglerepository togglerepo;
	
	
	@Autowired
	private ToggleService toggleservice;
	
	@Autowired
	private FeatureService featureService;
	
	@PostMapping(consumes=MediaType.APPLICATION_JSON_UTF8_VALUE)
	public String toogle(@RequestBody SearchCriteria sc){
                   
		featureConfig= togglerepo.findbyfeature(sc.getFeatureName());
		boolean result=  toggleservice.toggle(sc,featureConfig);
		String res="Enabled";
		
		if(!result)
			{res="Disabled";}
		
		return sc.getFeatureName() + " is " + res;
		
	}
	
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	@PostMapping(path = "/createproject",consumes=MediaType.APPLICATION_JSON_UTF8_VALUE)	
	public void createproject(@RequestBody Feature2 fc){
		
		togglerepo.save(new Togglemodel(null,null,null,false,fc.getProjectname()));	
	}
	
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	@PostMapping(path = "/create",consumes=MediaType.APPLICATION_JSON_UTF8_VALUE)	
	public void createFeature(@RequestBody Feature2 fc){
		
		togglerepo.save(new Togglemodel(fc.getFeatureName(),null,null,fc.isActive(),fc.getProjectname()));	
	}		
	
	
	@PostMapping(path = "/addRules",consumes=MediaType.APPLICATION_JSON_UTF8_VALUE)	
	public void addRule(@RequestBody Feature2 fc){
		
			String fname= fc.getFeatureName();
			boolean active= fc.isActive();
			List<Rule> rules= fc.getRules();
			for(int i=0;i<rules.size();i++){
				togglerepo.save(new Togglemodel(fname,rules.get(i).getKey(),rules.get(i).getValue(),rules.get(i).isActive(),fc.getProjectname()));
				
			}
	
	}
	
	@GetMapping(path = "/getfeatures",consumes=MediaType.APPLICATION_JSON_UTF8_VALUE)
	public List<Togglemodel> getFeaturesForUi(){

		return togglerepo.getfeatures(null);
		
	}
	
	@GetMapping(path = "/getprojects",consumes=MediaType.APPLICATION_JSON_UTF8_VALUE)
	public List<Togglemodel> getprojects(){

		return togglerepo.getprojects(null);
		
	}
	
	@PostMapping(path = "/singlerule",consumes=MediaType.APPLICATION_JSON_UTF8_VALUE)	
	public void addsingleRule(@RequestBody Singlerule sr){
		togglerepo.save(new Togglemodel(sr.getFeatureName(),sr.getKey(),sr.getValue(),sr.getActive(),"project1"));
	
	}
	
	@GetMapping(path = "/getfeaturesbyname/{name}",consumes=MediaType.APPLICATION_JSON_UTF8_VALUE)	
	public List<Togglemodel> getfeaturesbyname(@PathVariable String name){
		return togglerepo.findbyfeature(name);
		
	}
	@PostMapping(path = "/updaterule",consumes=MediaType.APPLICATION_JSON_UTF8_VALUE)	
	public void updateRules(@RequestBody Singlerule sr){
		togglerepo.Updateactive(sr.getActive(),sr.getFeatureName(),sr.getKey(),sr.getValue());
		
	}
	
}

	
	

