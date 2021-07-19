package com.annr.Toggle2.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.annr.Toggle2.data.ToggleRepository;
import com.annr.Toggle2.request.Feature;


@Service
public class FeatureService {
	@Autowired
	private ToggleRepository togglerepository;
	public void createOrUpdateFeature(Feature feature) {
		
		togglerepository.createOrUpdateFeature(feature);
	}
	

}
