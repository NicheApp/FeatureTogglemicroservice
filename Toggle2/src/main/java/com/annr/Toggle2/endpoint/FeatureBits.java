package com.annr.Toggle2.endpoint;


import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.annr.Toggle2.model.Togglemodel;
import com.annr.Toggle2.repository.Togglerepository;
import com.annr.Toggle2.request.Feature;
import com.annr.Toggle2.request.SearchCriteria;
import com.annr.Toggle2.service.FeatureService;
import com.annr.Toggle2.service.ToggleService;




@RestController
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

		featureConfig=togglerepo.findAll();
		boolean result=  toggleservice.toggle(sc,featureConfig);
		String res="Enabled";
		if(!result)
		{
			res="Disabled";
			
		}
		return sc.getFeatureName() + " is " + res;
		
	}
	@PostMapping(path = "/create",consumes=MediaType.APPLICATION_JSON_UTF8_VALUE)	
	public void createFeature(@RequestBody Feature fc){
		togglerepo.save(new Togglemodel(fc.getFeatureName(),null,null,fc.isActive()));
		
		featureService.createOrUpdateFeature(fc);
		//return togglerepo.save(fc);
		
		
	}
	
	@PostMapping(path = "/addRules",consumes=MediaType.APPLICATION_JSON_UTF8_VALUE)	
	public void addRule(@RequestBody Feature fc){
		
		
		featureService.createOrUpdateFeature(fc);
		
		
	}
	
	

	
	}

	
	

